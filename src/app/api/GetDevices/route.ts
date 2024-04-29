export const dynamic = 'force-dynamic';
export async function GET(request: Request) {
  const result = await Promise.all([
    fetch('http://103.154.130.12/Home/GetArrLastReading'),
    fetch('http://103.154.130.12/Home/GetAwlrLastReading')
  ])
    .then(
      response => Promise.all([
        response[0].json(),
        response[1].json()
      ])
        .then(jsonResult => {
          const arrResult = jsonResult[0];
          const awlrResult = jsonResult[1];
          if (arrResult.metaData.code === 200 && awlrResult.metaData.code === 200) {
            return Response.json({
              ...arrResult,
              response: [
                ...arrResult.response,
                ...awlrResult.response,
              ]
            })
          }
          else if (arrResult.metaData.code === 200)
            return Response.json(arrResult);
          else
            return Response.json(awlrResult);
        })
    )
  return result;
}