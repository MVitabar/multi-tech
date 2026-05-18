export function generatePixPayload(
  pixKey: string,
  merchantName: string,
  merchantCity: string,
  amount?: number,
  txid: string = "***"
): string {
  // Helpers to format fields according to EMVCo logic
  const formatLength = (id: string, value: string) => {
    const length = value.length.toString().padStart(2, "0");
    return `${id}${length}${value}`;
  };

  // Remove accents and special characters, keep it uppercase
  const sanitize = (str: string, maxLength: number) => {
    return str
      .substring(0, maxLength)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  };

  const name = sanitize(merchantName, 25);
  const city = sanitize(merchantCity, 15);

  const payloadFormatIndicator = "000201";
  const merchantAccountInfo = `0014br.gov.bcb.pix01${pixKey.length.toString().padStart(2, "0")}${pixKey}`;
  const merchantAccountInfoFormatted = formatLength("26", merchantAccountInfo);
  const merchantCategoryCode = "52040000";
  const transactionCurrency = "5303986";
  const transactionAmount = amount ? formatLength("54", amount.toFixed(2)) : "";
  const countryCode = "5802BR";
  const merchantNameField = formatLength("59", name);
  const merchantCityField = formatLength("60", city);
  const additionalData = formatLength("62", formatLength("05", txid));

  const payload = [
    payloadFormatIndicator,
    merchantAccountInfoFormatted,
    merchantCategoryCode,
    transactionCurrency,
    transactionAmount,
    countryCode,
    merchantNameField,
    merchantCityField,
    additionalData,
    "6304",
  ].join("");

  // Calculate CRC16-CCITT-FALSE
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ 0x1021) & 0xffff;
      } else {
        crc = (crc << 1) & 0xffff;
      }
    }
  }

  const checksum = crc.toString(16).toUpperCase().padStart(4, "0");
  return payload + checksum;
}
