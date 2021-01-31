const Dummy = (props) => {
    console.log(props)
    return (
        <div>
            {/* Hier werden die Werte mit eigenem name übergeben */}
            {/* <h1>{props.name}</h1>
            <p>{props.age}</p> */}

            {/* Hier werden die Werte gesammelt als  Objekt übergeben */}
            <h1>{props.all.name}</h1>
            <p>{props.all.age}</p>
        </div>
    );
}


export default Dummy;