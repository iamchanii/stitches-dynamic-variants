import { createStitches, CSS } from "@stitches/react";
import { createDynamicStyled } from ".";

const { css, config }=  createStitches({
  theme: {
    colors: {
      red: 'red'
    }
  }
})


const styled = createDynamicStyled<typeof config>(css)

const A =styled('div', {
  color: '$red',
  variants: {
    a: {
      true: {
        color: '$red'
      }
    }
  },
  dynamicVariants: {
    paddingX: (key: string): CSS => ({
      color: '$red',
    }),
    paddingY: (key: 'paddingY'): CSS => ({
      color: '$red',
    })
  }
})

A.defaultProps = {
  paddingY: ''
}