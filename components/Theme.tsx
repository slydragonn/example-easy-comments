
interface ToggleThemeProps {
  state: boolean
  func: () => void
}

const ToggleTheme = ({state, func}: ToggleThemeProps) => {
  return (
    <div style={{margin: '0 0 0 calc(50% - 20px)', fontSize: '40px', color: state ? '#000' : '#fff', cursor: 'pointer'}}>
      {
        state
        ? <span onClick={func}>&#9790;</span>
        : <span onClick={func}>&#9728;</span>
      }
    </div>
  )
}

export default ToggleTheme