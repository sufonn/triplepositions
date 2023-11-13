import { DM_Sans, DM_Serif_Display, Source_Code_Pro, Jost } from 'next/font/google'

export const dm_sans = DM_Sans({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const dm_serif_disp = DM_Serif_Display({
    weight: ['400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const source_code_pro = Source_Code_Pro({
    weight: ['200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})
  
export const jost = Jost({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})