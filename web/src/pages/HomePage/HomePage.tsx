import * as stylex from '@stylexjs/stylex'

import { Metadata } from '@redwoodjs/web'

import { mainStyle } from 'src/styles/styles.stylex'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>

      <div {...stylex.props(mainStyle.base)}>
        <p>Hello! We are using styleX here.</p>
      </div>
    </>
  )
}

export default HomePage
