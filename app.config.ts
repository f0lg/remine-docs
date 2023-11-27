export default defineAppConfig({
  docus: {
    title: 'ReMine',
    description: 'The best place to start your documentation.',
    image: 'https://github.com/f0lg/remine/assets/144524322/6a335c15-4bb1-4d2e-a2a4-8b3e7d793733',
    socials: {
      twitter: 'nuxt_js',
      github: 'f0lg/remine',
      nuxt: {
        label: 'Nuxt',
        icon: 'simple-icons:nuxtdotjs',
        href: 'https://nuxt.com'
      }
    },
    github: {
      dir: '.starters/default/content',
      branch: 'main',
      repo: 'docus',
      owner: 'nuxt-themes',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
