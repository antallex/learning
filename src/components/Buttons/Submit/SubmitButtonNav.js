import { NavLink } from "react-router-dom"

function SubmitButtonNav(props) {
    return (
        <>
            <NavLink to={props.to} className='px-10 py-2 rounded-full  font-medium bg-primary-dark hover:bg-primary-900-dark text-on-primary-dark hover:text-on-primary-900-dark shadow-primary-dark'  >{props.text}</NavLink>
        </>
    )
}

export default SubmitButtonNav
