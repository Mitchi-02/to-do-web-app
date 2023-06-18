async function getTasks() {
  const res = await fetch('/')
  return res.json()
}

export default async function Page() {
  // Wait for the promises to resolve
  //const tasks = await getTasks()
  
  return (
    <>
      <h1>my tasks</h1>
    </>
  )
}
