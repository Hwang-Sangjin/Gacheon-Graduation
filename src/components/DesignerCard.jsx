const DesignerCard = ({ title, data }) => {
  return (
    <div>
      <div className="h-[2rem] text-3xl mb-4">{title}</div>
      <div className="md:w-3/4 sm:w-1/5">
        <img className="designer-card" src={data.Image_Color} />
        <div>{data.Name_kor}</div>
        <div>{data.Name_eng}</div>
        <div>{data.Role}</div>
        <div>Email {data.Email}</div>
        <div>Link {data.Name_kor}</div>
      </div>
    </div>
  );
};

export default DesignerCard;
