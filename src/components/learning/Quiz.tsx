import { useEffect, useState, type ReactNode } from 'react';

type Question = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

type Props = {
  section: string;
};

function renderInline(text: string, keyOffset: number): ReactNode[] {
  const parts: ReactNode[] = [];
  const inlineCodeRegex = /`([^`]+)`/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  const pushPlain = (plain: string) => {
    parts.push(
      <span key={`text-${keyOffset}-${parts.length}`}>
        {plain.split('\n').flatMap((line, index, lines) =>
          index < lines.length - 1
            ? [line, <br key={`br-${keyOffset}-${parts.length}-${index}`} />]
            : [line],
        )}
      </span>,
    );
  };

  while ((match = inlineCodeRegex.exec(text)) !== null) {
    if (match.index > lastIndex) pushPlain(text.slice(lastIndex, match.index));
    parts.push(<code key={`inline-${keyOffset}-${parts.length}`}>{match[1]}</code>);
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) pushPlain(text.slice(lastIndex));
  return parts;
}

function renderText(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  const codeBlockRegex = /```(?:\w*)\n([\s\S]*?)```/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(...renderInline(text.slice(lastIndex, match.index), parts.length));
    }
    parts.push(
      <pre key={`block-${parts.length}`} style={{ overflowX: 'auto' }}>
        <code>{match[1]}</code>
      </pre>,
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(...renderInline(text.slice(lastIndex), parts.length));
  }
  return parts;
}

export default function Quiz({ section }: Props) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selected, setSelected] = useState<Record<string, number | undefined>>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const base = (import.meta as any).env?.BASE_URL ?? '/';
    const url = `${base.replace(/\/$/, '')}/data/quiz/${section}.json`;
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setQuestions)
      .catch((e) => setError(`퀴즈 데이터를 불러오지 못했습니다: ${e.message}`));
  }, [section]);

  if (error) return <p style={{ color: 'crimson' }}>{error}</p>;
  if (questions.length === 0) return <p>퀴즈 로딩 중…</p>;

  const score = questions.reduce(
    (acc, q) => acc + (selected[q.id] === q.answer ? 1 : 0),
    0,
  );

  return (
    <div style={{ marginTop: '1.5rem' }}>
      <h3>📝 섹션 퀴즈 ({questions.length}문항)</h3>
      {questions.map((q, qi) => {
        const userPick = selected[q.id];
        const correct = userPick === q.answer;
        return (
          <div
            key={q.id}
            style={{
              border: '1px solid var(--sl-color-gray-5)',
              borderRadius: '0.5rem',
              padding: '0.75rem 1rem',
              margin: '0.75rem 0',
            }}
          >
            <p style={{ fontWeight: 600 }}>
              {qi + 1}. {renderText(q.question)}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {q.options.map((opt, i) => (
                <label key={i} style={{ cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name={q.id}
                    checked={userPick === i}
                    disabled={submitted}
                    onChange={() => setSelected({ ...selected, [q.id]: i })}
                    style={{ marginRight: '0.5rem' }}
                  />
                  {renderText(opt)}
                </label>
              ))}
            </div>
            {submitted && (
              <p
                style={{
                  marginTop: '0.5rem',
                  color: correct ? '#10a37f' : '#d97706',
                  fontSize: '0.9rem',
                }}
              >
                {correct ? (
                  '✅ 정답입니다.'
                ) : (
                  <>❌ 정답: {renderText(q.options[q.answer])}</>
                )}{' '}
                — {renderText(q.explanation)}
              </p>
            )}
          </div>
        );
      })}
      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          style={{
            background: 'var(--sl-color-accent)',
            color: 'white',
            padding: '0.5rem 1.25rem',
            borderRadius: '0.375rem',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          채점하기
        </button>
      ) : (
        <p style={{ fontWeight: 600, fontSize: '1.1rem' }}>
          점수: {score} / {questions.length} ({Math.round((score / questions.length) * 100)}%)
        </p>
      )}
    </div>
  );
}
