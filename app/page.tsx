import { generateAdvice } from '@/actions'
import { AdviceCard } from './_components/advice'

export default async function Page() {
  const advice = await generateAdvice()

  if (!advice) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-dark-blue p-4">
        <div className="p-6 bg-dark-grayish-blue shadow-md rounded-xl">
          <h1 className="text-center text-light-cyan font-extrabold">
            Failed to fetch advice
          </h1>
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
