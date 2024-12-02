
'use server'

import connectDB from "../DbConfig/DbConfig.js"

export async function getPosts(){
  try {
    await connectDB();

   
  } catch (error) {
    return { errMsg: error.message }
  }
}
