import Star from "./Star";


type RStar = {
    count: number
}


function Stars({count}:RStar){

    if (count < 1 || count > 5){
        return (
            <div>
                <p>Нет такого рейтинга!</p>
            </div>
        )
    }
    else {
    
    const array = new Array(count).fill(<Star/>)    
    
    return(
        <ul className="card-body-stars" >            
                {array.map((el,idx)=>
                    <li key={idx}>
                        {el}
                    </li>
                )}               
        </ul>
    )
    }

}

export default Stars;