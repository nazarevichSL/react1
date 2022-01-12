function Simpson (props) {
let {name, surname, age, info, photo}=props;
    return (
        <div>
            <h2>{name} {surname} {age}</h2>
            <img src={photo} alt={'name'}/>
            <p>{info}</p>
        </div>
    )
}
export default Simpson;