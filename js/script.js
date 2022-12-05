console.log('show')
let arrStands = ['a','b','c','d']
let arrTeam = ['ksa','qtr','arg','br']
for(standing of arrStands){

  let tableContent = ''
  for(row of arrTeam){

    tableContent +=
    `<!-- start team -->
    <tr  class="border-bottom ">
      <th class="third-txt" scope="row">${row}</th>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>3</td>
    </tr>
    <!-- end team -->`
  }
  let content =
  `<div class="col-md-6 col-sm-12  ">
    <table class="table  text-center p-3 bg-light shadow rounded caption-top">
      <caption class="text-center text-light">المجموعة ${standing}</caption>
      <thead>
        <tr class="secondary-bg text-light">
          <th scope="col">المنتخب</th>
          <th scope="col">لعب</th>
          <th scope="col">فاز</th>
          <th scope="col">خسر</th>
          <th scope="col">تعادل</th>
          <th scope="col">نقاط</th>
        </tr>
      </thead>
      <tbody>
        ${tableContent}
      </tbody>
    </table>
  </div>`
  document.querySelector('#standings').innerHTML +=content
}


/*
const token = "f324f8dd31174c80bbe1126cce374fce";
const baseUrl = "https://api.football-data.org/v4";


function getStandings(){
  const url =`${baseUrl}/competitions/2000/standings`

    axios
      .get("https://proxy.cors.sh/https://api.football-data.org/v4/competitions/2000/standings", {
      headers: {
        "X-Auth-Token": `${token}`,
        },
    })
    .then((response) => {

      console.log(response);
      const standings = response.standings
      console.log(standings);
      for(standing of standings){
        console.log(` standing${standing}`);
        let tableContent = ''
        for(row of standings.table){
      
          tableContent +=
          `<!-- start team -->
          <tr  class="border-bottom ">
            <th class="third-txt" scope="row">${row}</th>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>3</td>
          </tr>
          <!-- end team -->`
        }
        let content =
        `<div class="col-md-6 col-sm-12  ">
          <table class="table  text-center p-3 bg-light shadow rounded caption-top">
            <caption class="text-center text-light">المجموعة ${standing.group}</caption>
            <thead>
              <tr class="secondary-bg text-light">
                <th scope="col">المنتخب</th>
                <th scope="col">لعب</th>
                <th scope="col">فاز</th>
                <th scope="col">خسر</th>
                <th scope="col">تعادل</th>
                <th scope="col">نقاط</th>
              </tr>
            </thead>
            <tbody>
              ${tableContent}
            </tbody>
          </table>
        </div>`
        document.querySelector('#standings').innerHTML +=content
      }
      
    });

}
getStandings()

*/
