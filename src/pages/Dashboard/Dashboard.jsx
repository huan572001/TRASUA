import dashboard from '@/assets/logo.png';
const Dashboard = () => {
  return (
    <>
      <div>
        {/* <img
          style={{
            height: "674px",
            width: "1131px",
            overflow: "hidden",
            imageRendering: "pixelated",
          }}
          src={dashboard}
          alt="Hình ảnh DashBoard"
        /> */}
        <p
          style={{
            fontSize: '40px',
            display: 'flex',
            justifyContent: 'center',
            color: 'red',
          }}
        >
          Cửa hàng bán trái cây
        </p>
        <img
          style={{
            height: '450px',
            width: '1110px',
          }}
          src={dashboard}
          alt="Hình ảnh DashBoard"
        />
      </div>
    </>
  );
};

export default Dashboard;
