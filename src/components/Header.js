const Header = (props) => {
    console.log(props.myColor);
    const color = !props.myColor ? 'gold' : props.myColor
    return (
        <div style={{ height: '50vh', background: color }}>
            {/* <div style={{ height: '50vh', background: !props.myColor ? 'gold' : props.myColor }}> */}
            Welcome to {props.name}
        </div>
    );
}

export default Header;