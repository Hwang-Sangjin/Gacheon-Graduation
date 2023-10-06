const DesignerCard = ({ title, data }) => {
  return (
    <div>
      <div>{title}</div>
      <div className="md:w-2/3 sm:w-1/3">
        <img src={data.Image_BW} />
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
