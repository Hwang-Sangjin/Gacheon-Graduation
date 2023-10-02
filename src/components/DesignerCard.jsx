const DesignerCard = ({title, data}) => {
    return(
        <div>
            <div>
                {title}
            </div>
            <div>
                {data.Name_kor}
            </div>
        </div>
    )
}

export default DesignerCard