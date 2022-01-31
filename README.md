# Discord Alura 

Projeto criado na Imersão React da Alura. 

A Imersão React desenvolveu um projeto de sala de chat para troca de mensagens entre usuários. Contém uma tela de login, que se comunica com a api do Github para trazer a foto e o nome do usuário.

Após entrar na sala de chat, o usuário consegue enviar mensagens, que são armazenadas em um banco de dados. No caso desse projeto, foi utilizado o Supabase para essa finalidade.

## **Tecnologias utilizadas**
### <ins>**Next**</ins>
Aplicação criada com [NextJS](https://nextjs.org/) com [setup manual](https://nextjs.org/docs/getting-started#manual-setup).

Aplicamos o [next/router](https://nextjs.org/docs/api-reference/next/router) para redirecionamento de página entre o login e a página de chat. Isso permite com que a transição entre as páginas seja feita do lado do browser, melhorando a performance de carregamento da aplicação.

Usei a função [ServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props) para exportar a chave e a url de requisição para o Supabase. Com isso, o Next pode se comunicar com o Node e obter as chaves de ambiente e passar como props para a página de chat, e essa página pode se comunicar com o Supabase sem expor as variáveis no browser.

### <ins>**@skynexui**</ins>

A fim de facilitar a estilização dos blocos e acelerar a implementação do projeto, foi utilizado componentes já prontos da [SkynexUI](https://github.com/skynexui/components), que são facilmente editáveis para personalização.

[O Storybook](https://storybook.skynexui.dev/?path=/story/introduction--page) dessa biblioteca permite a visualização de possíveis adaptações, o que facilita ainda mais sua implementação.

### <ins>**Supabase**</ins>

O [Supabase](https://supabase.com/) foi usado como um serviço de backend. Ele pode ser usado de várias formas, mas neste projeto foi usado como um database para armazenar e alterar as mensagens enviadas.

Para atualização do chat em tempo real, foi usada a feature de [*subscribe*](https://supabase.com/docs/reference/javascript/subscribe).

Extremamente fácil de criar, administrar e usar, além de ser de graça!

### <ins>**@crello/react-lottie**</ins>

[Biblioteca](https://github.com/crello/react-lottie) para uso de animações baixadas em um arquivo json a partir da página [Lottie Files](https://lottiefiles.com/). Permite adicionar a animação como um componente React, bem como configurar alguns parâmetros para a animação.

As animações são muito lindas! 😍

Usada na página 404.


---
## Agradecimentos

Sou especialmente grata ao professores dessa Imersão [Mario Souto](https://github.com/omariosouto) e [Paulo Silveira](https://github.com/peas) pelos aprendizados alcançados com esse projeto, e pela oportunidade de exercitar os conhecimentos que ganhei desde Julho/21, quando comecei a aprender React.

Agradeço também ao time da Alura por essa entrega! Admiro demais vocês! 🤩
