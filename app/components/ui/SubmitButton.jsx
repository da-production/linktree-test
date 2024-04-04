'use client'

import {useFormStatus} from 'react-dom'
import Icones from './Icones'

export function SubmitButton({title,...props}) {
    const {pending} = useFormStatus()
    
    return (
      <>
        {
          pending ? (
            <button {...props} type="button" aria-disabled={pending}>
              Loading <Icones.spinner className="w-5" />
            </button>
          ) : (
            <button {...props} type="submit">
              {title}
            </button>
          )
        }
        
      </>
        
    )
}