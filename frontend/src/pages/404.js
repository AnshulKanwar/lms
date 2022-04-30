import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout>
      <div className='flex flex-col w-fit mx-auto gap-y-5'>
        <h1 className='text-9xl font-black text-slate-500'>404</h1>
        <p className='self-end text-2xl'>Not Found.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage