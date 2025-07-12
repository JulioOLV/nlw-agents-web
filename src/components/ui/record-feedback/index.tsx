import './style.css'

interface RecordFeedbackProps {
  isRecording: boolean
  isSpeaking: boolean
}

export function RecordFeedback({
  isRecording,
  isSpeaking,
}: RecordFeedbackProps) {
  return (
    <>
      {isRecording && (
        <div className="flex flex-col items-center gap-2">
          <span
            className={`relative flex h-16 w-16 items-center justify-center ${isSpeaking ? 'animate-pulse-mic' : ''}`}
          >
            <svg
              aria-label="Microphone"
              fill={isSpeaking ? '#ef4444' : '#555'}
              height="40"
              viewBox="0 0 24 24"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Microphone</title>
              <rect
                fill="currentColor"
                height="12"
                rx="3"
                width="6"
                x="9"
                y="2"
              />
              <path
                d="M5 10v2a7 7 0 0 0 14 0v-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                stroke="currentColor"
                strokeWidth="2"
                x1="12"
                x2="12"
                y1="22"
                y2="18"
              />
            </svg>
            {isSpeaking && (
              <span className="absolute inset-0 animate-pulse-mic-bg rounded-full bg-red-400 opacity-30" />
            )}
          </span>
          <p>Gravando...</p>
        </div>
      )}
      {!isRecording && <p>Pausado</p>}
    </>
  )
}
