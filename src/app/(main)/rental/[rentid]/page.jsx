const page = async ({ params }) => {
  const { rentid } = params;
  return <div>{rentid}</div>;
};

export default page;
