// bad
interface EmployeeB {
  name: string;
  getName: () => string
  printTimeSheetReport: () => void
}

// good
interface TimeSheetReport {
  printTimeSheetReport: () => void
}

interface EmployeeG {
  name: string;
  getName: () => string
}
