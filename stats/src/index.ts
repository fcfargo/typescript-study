import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
// Create an object that statisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in sometihng satisfying
// the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);
// matchReader.load();

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);
summary.buildAndPrintReport(matchReader.matches);

const summaryHtml = Summary.winsAnalysisWithHtmlReport("Man United");
summaryHtml.buildAndPrintReport(matchReader.matches);
