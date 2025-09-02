import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminModulesWrapper from "@/components/organisms/dashboard/admin/modules/DashboardAdminModules";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function DashboardAdminModulesPage() {
  return (
    <section>
      <div className="flex items-center justify-between">
        <DashboardTitle
          head="Modul"
          body="Kelola seluruh modul edukasi yang tersedia, pantau materi agar tetap relevan dan bermanfaat bagi pasien"
        />
        <div>
          {/* Tombol Tambah Modul disembunyikan */}
          {false && (
            <Link href={`/dashboard/admin/modules/create`}>
              <Button>
                <Plus />
                Tambah Modul
              </Button>
            </Link>
          )}
        </div>
      </div>
      <DashboardAdminModulesWrapper />
    </section>
  );
}


