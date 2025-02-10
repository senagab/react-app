import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, minima.
      Doloribus quia repudiandae hic! Veritatis amet, tempora iste ipsa quaerat
      neque facilis praesentium porro adipisci nam? Tempora at fugit
      consectetur.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=senagab&show_icons=true&theme=dracula"
        alt=""
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=senagab&layout=compact&langs_count=7&theme=dracula"
        alt=""
      />
    </GithubSecao>
  </section>
)

export default Sobre
