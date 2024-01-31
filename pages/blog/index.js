import Container from 'components/container'
import Hero from 'components/hero'
import Meta from 'components/meta'

const Blog = () => {
  return (
    <Container>
      <Meta pageTitle='ブログ' />
    <Hero
      title='Blog'
      subtitle='Recent Posts'
    />
    </Container>
  )
}
export default Blog
