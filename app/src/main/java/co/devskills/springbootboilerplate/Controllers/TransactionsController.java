//package co.devskills.springbootboilerplate;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.MediaType;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.UUID;
//
//@RestController
//public class TransactionsController {
//
//    private List<Transaction> transactions = new ArrayList<>();
//
//    @PostMapping(value = "/transactions", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    @ResponseStatus(HttpStatus.CREATED)
//    public Transaction createTransaction(@RequestBody TransactionRequest transactionRequest) {
//        if (transactionRequest.getAccount_id() == null || transactionRequest.getAmount() == null) {
//            throw new IllegalArgumentException("Mandatory body parameters missing or have incorrect type.");
//        }
//
//        //Transaction transaction = new Transaction();
//        transaction.setTransaction_id(UUID.randomUUID().toString());
//        transaction.setAccount_id(transactionRequest.getAccount_id());
//        transaction.setAmount(transactionRequest.getAmount());
//        transaction.setCreated_at("2021-08-14T12:00:00Z"); // Use actual timestamp
//
//        transactions.add(transaction);
//        return transaction;
//    }
//
//    @GetMapping(value = "/transactions", produces = MediaType.APPLICATION_JSON_VALUE)
//    public List<Transaction> getAllTransactions() {
//        return transactions;
//    }
//
////    @GetMapping(value = "/transactions/{transaction_id}", produces = MediaType.APPLICATION_JSON_VALUE)
////    public Transaction getTransactionById(@PathVariable("transaction_id") String transactionId) {
////        return transactions.stream()
////                .filter(transaction -> transaction.getTransaction_id().equals(transactionId))
////                .findFirst()
////                .orElseThrow(() -> new TransactionNotFoundException("Transaction not found"));
// //   }
//}
