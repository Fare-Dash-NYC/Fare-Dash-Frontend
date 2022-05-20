 const url = 'http://localhost:8081/getReports'

 function RenderReports(){

    async function getReports(event){
        event.preventDefault();
         const response = await fetch(url , {
            method: 'GET',
            headers: {
                
                "Content-Type": "application/json",
                // user_id: userId,
            }
         })
         const reports = await response.json();
         reports.map(report => {
             return (
                <ul>
                <li>
                    <h4>`${report.station}` </h4>
                    <h6>`${report.reportType}`</h6>
                    <p>`${report.details}`</p>
             
                </li>
            </ul>

             )

         })
        }



 }



 export default RenderReports;