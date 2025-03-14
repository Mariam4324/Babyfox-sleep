// Hastebin
// import { AlertCircle, CheckCircle2, XCircle } from "lucide-react"
// import { Button } from "../ui/button"
// import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog"
// type EmailData = {
//     reachable: boolean
//     syntax: {
//       valid: boolean
//     }
//     smtp: {
//       catch_all: boolean
//       deliverable: boolean
//       disabled: boolean
//     } | null
//     disposable: boolean
//     has_mx_records: boolean
// }

// type Props = {
//   email: string;
//   emailData: EmailData;
//   open: boolean;
//   setOpen: (val: boolean) => void;
// }

// const StatusItem = ({
//   label,
//   value,
//   status,
//   description,
// }: { label: string; value: boolean | string; status?: "success" | "error" | "warning"; description: string }) => {
//   const Icon = value ? CheckCircle2 : status === "warning" ? AlertCircle : XCircle
//   const colorClass = value ? "text-green-500" : status === "warning" ? "text-yellow-500" : "text-red-500"

//   return (
//     <div className="flex flex-col py-2">
//       <div className="flex items-center justify-between">
//         <span className="text-sm font-medium">{label}</span>
//         <div className="flex items-center gap-2">
//           <span className={`text-sm ${colorClass}`}>{typeof value === "string" ? value : value ? "Yes" : "No"}</span>
//           <Icon className={`h-4 w-4 ${colorClass}`} />
//         </div>
//       </div>
//       <p className="text-xs text-muted-foreground">{description}</p>
//     </div>
//   )
// }

// const EmailVerificationDialog = ({ emailData, open, setOpen, email }: Props) => {
//   const isSafeToUse = emailData.reachable && emailData.syntax.valid && emailData.smtp?.deliverable && !emailData.disposable

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       <DialogContent>
//         <DialogTitle>Email Verification Status</DialogTitle>
//         <p className={`text-sm font-bold ${isSafeToUse ? "text-green-500" : "text-red-500"}`}>
//           {isSafeToUse ? "This email is safe to use." : "Warning: This email may not be reliable."}
//         </p>
//         <DialogDescription>Detailed verification results for {email}</DialogDescription>
//         <div className="flex flex-col gap-2 py-4">
//           <div className="space-y-2 divide-y">
//             <StatusItem label="Reachable" value={emailData.reachable} description="Indicates whether the email server accepted our request, suggesting the email may be active." />
//             <StatusItem label="Valid Syntax" value={emailData.syntax.valid} description="Checks if the email address follows the correct format and structure." />
//             {emailData.smtp && (
//               <>
//                 <StatusItem label="Catch All" value={emailData.smtp.catch_all} status="warning" description="A 'catch-all' email means it accepts all incoming messages, making it hard to verify its legitimacy." />
//                 <StatusItem label="Deliverable" value={emailData.smtp.deliverable} description="Indicates whether emails can be successfully delivered to this address." />
//                 <StatusItem label="Disabled" value={!emailData.smtp.disabled} description="Shows if the email address is active and not disabled by the server." />
//               </>
//             )}
//             <StatusItem label="Disposable Email" value={!emailData.disposable} description="Checks if the email is temporary or from a known disposable email provider." />
//             <StatusItem label="MX Records Found" value={emailData.has_mx_records} description="MX records indicate whether the domain is configured to receive emails." />
//           </div>
//         </div>
//         <DialogFooter>
//           <Button variant="outline" onClick={() => setOpen(false)}>
//             Close
//           </Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   )
// }

// export default EmailVerificationDialog

const EmailVerificationDialog = ({ emailData, open, setOpen, email, trigger, isVerifyEmailPending }: Props) => {
    const isSafeToUse = !!emailData && emailData.reachable && emailData.syntax.valid && emailData.smtp?.deliverable && !emailData.disposable;

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                {isVerifyEmailPending && !emailData && (
                    <div className="flex flex-col gap-2 py-4">
                        <div className="space-y-2 divide-y">
                            {[...Array(7)].map((_, i) => (
                                <div key={i} className="flex justify-between items-center py-2">
                                    <Skeleton className="h-4 w-32" />
                                    <Skeleton className="h-4 w-16" />
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {emailData && (
                    <>
                        <DialogTitle>Email Verification Status</DialogTitle>
                        <p className={`text-sm font-bold ${isSafeToUse ? "text-green-500" : "text-red-500"}`}>{isSafeToUse ? "This email is safe to use." : "Warning: This email may not be reliable."}</p>
                        <DialogDescription>Detailed verification results for {email}</DialogDescription>

                        <div className="flex flex-col gap-2 py-4">
                            <div className="space-y-2 divide-y">
                                <StatusItem label="Reachable" value={emailData.reachable} description="Indicates whether the email server accepted our request, suggesting the email may be active." />
                                <StatusItem label="Valid Syntax" value={emailData.syntax.valid} description="Checks if the email address follows the correct format and structure." />
                                {emailData.smtp && (
                                    <>
                                        <StatusItem label="Catch All" value={emailData.smtp.catch_all} status="warning" description="A 'catch-all' email means it accepts all incoming messages, making it hard to verify its legitimacy." />
                                        <StatusItem label="Deliverable" value={emailData.smtp.deliverable} description="Indicates whether emails can be successfully delivered to this address." />
                                        <StatusItem label="Disabled" value={!emailData.smtp.disabled} description="Shows if the email address is active and not disabled by the server." />
                                    </>
                                )}
                                <StatusItem label="Disposable Email" value={!emailData.disposable} description="Checks if the email is temporary or from a known disposable email provider." />
                                <StatusItem label="MX Records Found" value={emailData.has_mx_records} description="MX records indicate whether the domain is configured to receive emails." />
                            </div>
                        </div>
                    </>
                )}

                <DialogFooter>
                    <DialogTrigger asChild>
                        <Button variant="destructive">Close</Button>
                    </DialogTrigger>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default EmailVerificationDialog;
