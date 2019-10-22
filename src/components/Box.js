import styled from "styled-components";
import {
  compose,
  space,
  color,
  layout,
  shadow,
  border,background,
  typography
} from "styled-system";


 let Box = styled('div')(
    compose(
        space,
        color,
        layout,
        shadow,
        border,
        background,
        typography
    )
  )



  export default Box