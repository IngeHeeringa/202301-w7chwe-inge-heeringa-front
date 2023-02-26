const useUser = () => {
  const registerUser = async (data: FormData) => {
    const response = await fetch(
      `${process.env.REACT_APP_USER_URL}users/register`,
      {
        method: "POST",
        body: data,
      }
    );

    if (!response.ok) {
      throw new Error(await response.json());
    }
  };

  return { registerUser };
};

export default useUser;
