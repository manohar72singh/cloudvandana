import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanToInteger {
    public static int romanToInteger(String roman)
    {
        int result=0;
        Map<Character,Integer> numbersMap=new HashMap<>();
        numbersMap.put('I',1);
        numbersMap.put('V',5);
        numbersMap.put('X',10);
        numbersMap.put('L',50);
        numbersMap.put('C',100);
        numbersMap.put('D',500);
        numbersMap.put('M',1000);

        for(int i=0;i<roman.length();i++)
        {
            char ch=roman.charAt(i);
            if(i>0 && numbersMap.get(ch) > numbersMap.get(roman.charAt(i-1)))
            {
                result += numbersMap.get(ch) - 2*numbersMap.get(roman.charAt(i-1));
            }
            else
                result += numbersMap.get(ch);
        }
        return result;
    }

    public static void main(String[] args) {
        String romanNumber;
        Scanner kb = new Scanner(System.in);
        System.out.println("Enter Roman No(Capital Latter)");
        romanNumber=kb.next();
        int result=romanToInteger(romanNumber);
        System.out.println("The Roman Number is: "+romanNumber);
        System.out.println("Its Integer Value is: "+result);

        System.out.println();
    }
}
