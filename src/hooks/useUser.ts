const useUser = () => {
  const registerUser = async (data: FormData) => {
    const response = await fetch(
      `https://two02301-w7chwe-inge-heeringa-back.onrender.com/users/register`,
      {
        method: "POST",
        body: data,
      }
    );

    if (response.ok) {
      await response.json();
    }
  };

  return { registerUser };
};

export default useUser;
