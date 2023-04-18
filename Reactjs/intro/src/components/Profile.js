import { GetNewsDetail,newsAll,newsById } from "../../utils/newsActions"
const Profile = (props) =>
{
    return(
        <ul>
            {console.log(props)}
            <li>Test1</li>
            <li>Test2</li>
            <li>{props.myName}</li>
            <li>{props.drink}</li>
            {GetNewsDetail()}
            {newsAll()}
            {newsById()}
        </ul>
    )
}

export default Profile