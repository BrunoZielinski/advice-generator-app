'use server'

import { Advice } from '@/types'
import { revalidatePath } from 'next/cache'

export const refreshAdvice = async () => {
  revalidatePath('/')
}

export const generateAdvice = async (): Promise<Advice | null> => {
  try {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    return data.slip
  } catch (error) {
    return null
  }
}
