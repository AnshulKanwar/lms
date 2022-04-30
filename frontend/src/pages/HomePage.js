import CourseList from "../components/CourseList"
import Layout from "../components/Layout"

const HomePage = () => {
  return (
    <Layout title="Dashboard">
      <CourseList />
    </Layout>
  )
}

export default HomePage