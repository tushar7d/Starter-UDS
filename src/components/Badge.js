import styled from "styled-components"

const StyledIconFrame = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  i {
    font-size: ${props => ( props.height || 24)}px !important;
  }
`

let Icon = (props) =>{
    return(
        <StyledIconFrame
                    height={this.props.height}
                >
                    <i
                        className="material-icons mdc-button__icon"
                        aria-hidden="true"
                        style={{ color: this.props.color || "#9013FE" }}
                    >
                        {this.props.value || "favorite"}
                    </i>
</StyledIconFrame>
    )
}