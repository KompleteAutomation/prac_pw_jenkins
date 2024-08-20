import { ExeclLib } from "./exceloper";

class TestExcel{

    async testexl(){
        const lib = new ExeclLib();
        await lib.operationExcel();

    }


}

const testexl = new TestExcel();
testexl.testexl();