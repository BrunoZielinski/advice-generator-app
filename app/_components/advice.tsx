'use client'

import Image from 'next/image'
import { useTransition } from 'react'

import { Dice } from './dice'
import { Advice } from '@/types'
import { refreshAdvice } from '@/actions'

interface AdviceProps {
  data: Advice
}

export const AdviceCard = ({ data }: AdviceProps) => {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(() => {
      refreshAdvice()
    })
  }

  return (
    <div className="p-12 bg-dark-grayish-blue shadow-md rounded-xl max-w-[27rem] w-full relative">
      <p className="text-neon-green uppercase tracking-[0.2em] font-semibold leading-tight text-center text-sm">
        Advice #{data.id}
      </p>

      <p className="text-light-cyan font-extrabold leading-tight text-center text-xl max-w-[20.625rem] mt-6 mx-auto">
        <q>{data.advice}</q>
      </p>

      <Image
        width={200}
        height={10}
        draggable={false}
        alt="Pattern Divider"
        src="/pattern-divider.svg"
        className="mt-8 mx-auto w-full pointer-events-none select-none"
      />

      <button
        title="New Advice"
        disabled={isPending}
        onClick={handleClick}
        aria-label="New Advice"
        className="bg-neon-green size-14 rounded-full flex items-center justify-center shadow-md absolute transform -translate-x-1/2 -translate-y-1/2 -bottom-14 left-1/2 hover:scale-110 focus:outline-none transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Dice className={isPending ? 'animate-spin' : ''} />
        <span className="sr-only">New Advice</span>
      </button>
    </div>
  )
}
