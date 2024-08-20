import Exceljs, { Workbook, Worksheet } from 'exceljs'


export class ExeclLib {
    async operationExcel() {
        const sheetname: string = 'Login'

        const path = "resources//LoginData.xlsx"
        var workbook: Workbook = new Exceljs.Workbook()
        await workbook.xlsx.readFile(path).then(function () {
            const worksheet = workbook.getWorksheet(sheetname)
            if (worksheet != undefined) {
                // console.log(worksheet.rowCount)
                const ROWCOUNT = worksheet.rowCount;
                for (let cnt = 2; cnt <= ROWCOUNT; cnt++) {
                        const Row = worksheet.getRow(cnt);
                        const cellUN = Row.findCell(1);
                        const cellPWD = Row.findCell(2);
                        // const cellUN = Row.findCell(1);
                        console.log(cellUN?.value,cellPWD?.value)

                }
            }






        })

    }


}



