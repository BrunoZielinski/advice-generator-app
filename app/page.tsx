import { generateAdvice } from '@/actions'
import { AdviceCard } from './_components/advice'

export default async function Page() {
  const advice = await generateAdvice()

  if (!advice) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-dark-blue p-4">
        <div className="p-6 bg-dark-grayish-blue shadow-md rounded-xl">
          <p className="text-center text-light-cyan font-extrabold">
            Failed to fetch advice
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-dark-blue p-4">
      <AdviceCard data={advice} />
    </main>
  )
}
