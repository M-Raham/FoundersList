import { client } from '@/sanity/lib/client'
import { STARTUP_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import React from 'react'

const UserStartups = async ({id}: {id: string}) => {
  const startups = await client.fetch(STARTUP_BY_AUTHOR_QUERY, {id})
  return (
    <>
    {
      
    }
    </>
  )
}

export default UserStartups