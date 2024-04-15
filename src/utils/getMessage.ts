export const getMessage = async (messageId: string) => {
  try {
    const res = await fetch(`https://api.futurealize-with.tech/api/v1/message/${messageId}`);
    return res.json();
  } catch (error) {
    return error;
  }
};
