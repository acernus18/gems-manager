export default {
    Encode: encode,
    Decode: decode,
    ParseGemName: parseGemName,
    ReadPurchaseRecords: readPurchaseRecords,
    WritePurchaseOrder: writePurchaseOrder,
}

function getTypeAndColor(name) {
    let mapper = new Map([
        ["红宝石", ["A红宝石", "A红色"]],
        ["蓝宝石", ["C蓝宝石", "B蓝色"]],
        ["无烧鸽血", ["d无烧鸽血红", "AA鸽血红"]],
        ["无烧鸽血主证", ["d无烧鸽血红", "AA鸽血红"]],
        ["无烧主证鸽血", ["d无烧鸽血红", "AA鸽血红"]],
        ["斯里兰卡蓝宝石", ["B斯里兰卡蓝宝石", "B蓝色"]],
        ["皇家蓝", ["EE有烧皇家蓝", "bb皇家蓝"]],
        ["无烧皇家蓝", ["E无烧皇家蓝", "bb皇家蓝"]],
        ["矢车菊", ["FF有烧矢车菊", "b矢车菊"]],
        ["无烧矢车菊", ["F无烧矢车菊", "b矢车菊"]],
        ["无烧蓝宝", ["G无烧蓝宝石", "B蓝色"]],
        ["无烧粉蓝", ["H无烧粉红蓝宝石", "E粉色"]],
        ["无烧艳粉", ["H无烧粉红蓝宝石", "EE艳粉色"]],
        ["无烧热粉", ["H无烧粉红蓝宝石", "E热粉色"]],
        ["无烧紫色", ["II无烧紫色蓝宝石", "F紫色"]],
        ["无烧紫罗兰", ["II无烧紫色蓝宝石", "F紫色"]],
        ["无烧薰衣草", ["II无烧紫色蓝宝石", "F紫色"]],
        ["无烧艳紫", ["II无烧紫色蓝宝石", "FF艳紫色"]],
        ["无烧黄色", ["I无烧黄色蓝宝石", "H黄色"]],
        ["无烧金黄", ["I无烧黄色蓝宝石", "H黄色"]],
        ["无烧艳黄", ["I无烧黄色蓝宝石", "HH艳黄色"]],
        ["无烧帕帕", ["J无烧帕帕拉恰蓝宝石", "G帕帕拉恰"]],
        ["无烧红宝", ["k无烧红宝石", "A红色"]],
        ["鸽血红", ["l有烧鸽血红", "AA鸽血红"]],
        ["祖母绿", ["M祖母绿", "C绿色"]],
        ["无油祖母绿", ["N无油祖母绿", "C绿色"]],
        ["哥伦比亚祖母绿", ["O哥伦比亚祖母绿", "C绿色"]],
        ["帕帕拉恰", ["P帕帕拉恰蓝宝石", "G帕帕拉恰"]],
        ["紫色蓝宝石", ["QQ紫色蓝宝石", "F紫色"]],
        ["艳紫蓝宝石", ["QQ紫色蓝宝石", "FF艳紫色"]],
        ["粉蓝", ["Q粉红蓝宝石", "E粉色"]],
        ["艳粉", ["Q粉红蓝宝石", "EE艳粉色"]],
        ["热粉", ["Q粉红蓝宝石", "E热粉色"]],
        ["山东蓝宝", ["T山东蓝宝石", "B蓝色"]],
        ["泰国蓝宝", ["U泰国蓝宝石", "B蓝色"]],
        ["金绿猫眼", ["V猫眼", "D黄绿色"]],
        ["金绿宝石", ["XX金绿宝石", "D黄绿色"]],
        ["亚历山大变石", ["X亚历山大变石", "D黄绿色"]],
        ["星光红宝石", ["Y星光红宝石", "A红色"]],
        ["星光蓝宝石", ["Z星光蓝宝石", "B蓝色"]],
        ["无烧橙色", ["Z无烧橙色蓝宝石", "n橙色"]],
        ["无烧变色蓝宝石", ["无烧变色蓝宝石", "B蓝色"]],
        ["成品镶嵌", ["C成品镶嵌", "k白色"]],
        ["代销裸石", ["D代销裸石", "k白色"]],
        ["代镶嵌加工费", ["J代镶嵌加工费", "k白色"]],

    ]);
    let result = ["", ""];
    if (mapper.has(name)) {
        result = mapper.get(name);
    }

    return result;
}

function encode(value) {
    let valueString = value.toString();
    const SuffixMapper = ["A", "B", "C", "D", "E", "F"];
    const CodeMapper = ["V", "H", "K", "L", "M", "N", "R", "S", "T", "U"];
    let suffix = SuffixMapper[valueString.length - 1];
    valueString = valueString.substring(0, valueString.length - 1);

    let result = "";
    for (let i = 0; i < valueString.length; i++) {
        result += CodeMapper[parseInt(valueString[i])];
    }
    result += suffix;
    if (Math.random() > 0.3) {
        result += CodeMapper[Math.floor(Math.random() * 10)]
    }
    return result;
}

function decode(code) {
    let result = 0;
    const CodeMapper = ["V", "H", "K", "L", "M", "N", "R", "S", "T", "U"];
    const RepeatMapper = ["B", "C", "D", "E", "F"];
    for (let i = 0; i < code.length; i++) {
        if (CodeMapper.includes(code[i])) {
            result = result * 10 + CodeMapper.indexOf(code[i]);
        } else if (RepeatMapper.includes(code[i])) {
            result += 10 * (RepeatMapper.indexOf(code[i]) + 2 - result.toString().length);
            break;
        }
    }
    return result;
}

function parseGemName(gemName) {
    let result = {};

    let matches = /^.*?\W?([VHKLMNRSTUBCDEF]+)\W?.*$/.exec(gemName);
    if (matches !== null) {
        result["code"] = matches[1];
    }

    matches = /^.*(\d+\.\d+).*$/.exec(gemName);
    if (matches !== null) {
        result["weight"] = matches[1];
    }

    matches = /^\s*([^VHKLMNRSTUBCDEF\s]+).*$/.exec(gemName);
    if (matches !== null) {
        result["name"] = matches[1];
    }

    if (result.has("code")) {
        result["cost"] = decode(result["code"]);
    }

    return result;
}

function readPurchaseRecords(excelData) {
    let result = [];
    for (let i = 0; i < excelData.length; i++) {
        let row = excelData[i];
        let gemID = row["石号"];
        let name = row["石名称"];
        let number = row["石数"];
        let code = row["石编码"];
        let weight = row["石重"];
        let vendor = row["供货商"];
        let certification = row["证书类别"];
        let price = row["销售价"];
        result.push([gemID, name, number, code, weight, vendor, certification, price]);
    }
    return result;
}

function writePurchaseOrder(records) {
    let result = [];
    for (let i = 0; i < records.length; i++) {
        let gemID = records[i][0];
        let name = records[i][1];
        let number = parseInt(records[i][2]);
        let code = records[i][3];
        let weight = parseFloat(records[i][4]);
        let vendor = records[i][5];
        let certification = records[i][6];
        let price = records[i][7];

        let average = (weight / number).toFixed(2);
        let unitCost = decode(code);
        let cost = Math.round(unitCost * weight);
        let info = getTypeAndColor(name);
        let type = info[0];
        let color = info[1];

        let temp = {};
        temp["唯一号"] = number === 1 ? "TRUE" : "FALSE";
        temp["石号"] = gemID;
        temp["石名称"] = name + " " + code;
        temp["石料"] = type;
        temp["色彩"] = color;
        temp["形状"] = "通用";
        temp["石数"] = number;
        temp["石重"] = weight;
        temp["成本价"] = unitCost;
        temp["成本金额"] = cost;
        temp["规格"] = 1;
        temp["备注"] = /^\d+$/.test(vendor) ? parseInt(vendor) : vendor;
        temp["平均重"] = average;
        temp["计数量"] = "TRUE";
        temp["计重量"] = "TRUE";
        temp["重计价"] = "TRUE";
        temp["证书类别"] = certification;
        temp["销售价"] = price;
        temp["证书费"] = 0;

        result.push(temp);
    }
    return result;
}
