import { Sidebar } from '@/components/(dashboard)/sidebar';
import ProtectedRoute from '@/components/protectedRoute';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-[calc(100vh-4rem-4rem)] flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </ProtectedRoute>
  );
}
