function sdkToVersion(sdk) {
  if (sdk == 2)
    return "1.1";
  else if (sdk == 3)
    return "1.5";
  else if (sdk == 4)
    return "1.6";
  else if (sdk == 5 || sdk == 6)
    return "2.0";
  else if (sdk == 7)
    return "2.1";
  else if (sdk == 8)
    return "2.2";
  else if (sdk == 9 || sdk == 10)
    return "2.3";
  else if (sdk == 11)
    return "3.0";
  else if (sdk == 12)
    return "3.1";
  else if (sdk == 13)
    return "3.2";
  else if (sdk == 14 || sdk == 15)
    return "4.0";
  else if (sdk == 16)
    return "4.1";
  else if (sdk == 17)
    return "4.2";
  else if (sdk == 18)
    return "4.3";
  else if (sdk == 19 || sdk == 20 || sdk == 21)
    return "4.4";
  else if (sdk == 21)
    return "5.0";
  else if (sdk == 22)
    return "5.1";
  else if (sdk == 23)
    return "6.0";
  else if (sdk == 24)
    return "7.0";
  else if (sdk == 25)
    return "7.1";
  else if (sdk == 26)
    return "8.0";
  else return null;
}
