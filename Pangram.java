import java.util.Scanner;

public class Pangram {
    public static void main(String[] args) {
        Scanner kb = new Scanner(System.in);
        System.out.println("Enter Sentence== ");
        String str = kb.nextLine();
        boolean[] alpha = new boolean[26];
        int index = 0;
        int flag = 1;
        for(int i=0;i<str.length();i++){
            if(str.charAt(i)>= 'A' && str.charAt(i) <='Z'){
                index = str.charAt(i) - 'A';
            } else if (str.charAt(i)>= 'a' && str.charAt(i) <='z') {
                index = str.charAt(i) - 'a';
            }
            alpha[index] = true;
        }
        for (int i=0;i<26;i++){
            if(alpha[i]==false)
                flag=0;
        }
        System.out.println("String: "+ str);
        if(flag==1)
            System.out.println("The Sentence is Pangram");
        else
            System.out.println("The Sentence Not is Pangram");
    }
}
