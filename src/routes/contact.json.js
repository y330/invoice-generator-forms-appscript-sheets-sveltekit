export const post = async (request) => {
  //get this using prefill link
  const formID = "1FAIpQLSfyQJeW6k5tAT-d_Cnc3Uz1X-foRrASYxD1eqLemOK96FhZzg"

  const name = request.body.get("name");
  const date = request.body.get("date");
  const invoice = request.body.get("invoice")
  const start = request.body.get("start")
  const end = request.body.get("end")
  const rate = request.body.get("rate")
  const email = request.body.get("email")

  const res =
    await fetch("https://docs.google.com/forms/d/e/1FAIpQLSfyQJeW6k5tAT-d_Cnc3Uz1X-foRrASYxD1eqLemOK96FhZzg/viewform?usp=pp_url&" +
      `entry.979370985=${name}&` +
      `entry.2105567143=${date}&` +
      `entry.1354486722=${invoice}&` +
      `entry.228964225=${start}&` +
      `entry.2016147350=${end}&` +
      `entry.1238247584=${rate}&` +
      `entry.615787915 = ${email}&` +
      "submit=Submit"
    );

  if (res.status === 200) {
    return {
      status: 200,
      body: {
        message: "success",
      },
    };
  } else {
    return {
      status: 404,
      body: {
        message: "failed",
      },
    };
  }
};
